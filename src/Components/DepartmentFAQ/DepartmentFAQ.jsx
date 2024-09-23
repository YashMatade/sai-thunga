import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { Col, Container, Row, Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdArrowDropDownCircle } from "react-icons/md";
import { getDeptFAQ } from "../../Routes/routes.js";

function FAQItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <Container>
      <Row>
        <Col lg={12} sm={12} md={12}>
          <div onClick={toggleOpen} style={{ cursor: "pointer" }}>
            <div className="d-flex justify-content-between p-2">
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#505257",
                  }}
                >
                  <AiFillQuestionCircle
                    fontSize={24}
                    className="text-primary"
                  />{" "}
                  {question}
                </div>
              </div>
              <div>
                <MdArrowDropDownCircle fontSize={24} />
              </div>
            </div>
            <Collapse in={isOpen}>
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "black",
                  paddingLeft: "32px",
                  paddingRight: "16px",
                }}
                className="pt-2 pb-2 mb-2 ps-4 pe-4"
              >
                {answer}
              </div>
            </Collapse>
            <div className="mb-4"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const DepartmentFAQ = () => {
  const { dname } = useParams();
  const [faqData, setFaqData] = useState([]);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (dname) {
      getDeptFAQ(dname).then((res) => {
        setFaqData(res.data || []);
      }).catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
    }
  }, [dname]);

  const toggleFAQ = (index) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === index ? null : index));
  };

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="row">
        <div className="col-lg-12 mt-4">
          {visibleFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.faq_title}
              answer={faq.faq_answer}
              isOpen={openFAQ === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
          {faqData.length > 4 && (
            <div className="text-center mt-4">
              <Button onClick={toggleShowAll} variant="primary">
                {showAll ? "View Less" : "View All"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentFAQ;
