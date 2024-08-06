import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import { ProgressBar } from "react-bootstrap";
// import { ImPointRight } from "react-icons/im";

 function AboutCard() {
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  const [progress5, setProgress5] = useState(0);


  const [targetPercentage, setTargetPercentage] = useState(10);
  const [tareget2,setTarget2]= useState(25);
  const [tareget3,setTarget3]= useState(50);
  const [tareget4,setTarget4]= useState(80);
  const [tareget5,setTarget5]= useState(90);


  useEffect(() => {
    const interval = setInterval(() => {
      // تحديث القيمة التقدم بمقدار معين في كل دورة
      setProgress(prevProgress => {
        const diff = targetPercentage - prevProgress;
        const increment = diff > 10 ? 10 : diff; // تحديد حجم الخطوة لتفادي القفزات الكبيرة
        return prevProgress + increment;
      });

      // التوقف عندما نصل إلى النسبة المطلوبة
      if (progress >= targetPercentage) {
        clearInterval(interval);
      }
    }, 200); // كل 100 ميلي ثانية (نصف ثانية)
    
    return () => clearInterval(interval); // تنظيف الدورة عندما يتم تفريغ المكون
  }, [setTargetPercentage]);

  useEffect(() => {
    const interval = setInterval(() => {
      // تحديث القيمة التقدم بمقدار معين في كل دورة
      setProgress2(prevProgress2 => {
        const diff = tareget2 - prevProgress2;
        const increment = diff > 10 ? 10 : diff; // تحديد حجم الخطوة لتفادي القفزات الكبيرة
        return prevProgress2 + increment;
      });

      // التوقف عندما نصل إلى النسبة المطلوبة
      if (progress2 >= tareget2) {
        clearInterval(interval);
      }
    }, 200); // كل 100 ميلي ثانية (نصف ثانية)
    
    return () => clearInterval(interval); // تنظيف الدورة عندما يتم تفريغ المكون
  }, [setTarget2]);


   useEffect(() => {
    const interval = setInterval(() => {
      // تحديث القيمة التقدم بمقدار معين في كل دورة
      setProgress3(prevProgress3 => {
        const diff = tareget3 - prevProgress3;
        const increment = diff > 10 ? 10 : diff; // تحديد حجم الخطوة لتفادي القفزات الكبيرة
        return prevProgress3 + increment;
      });

      // التوقف عندما نصل إلى النسبة المطلوبة
      if (progress3 >= tareget3) {
        clearInterval(interval);
      }
    }, 200); // كل 200 ميلي ثانية (نصف ثانية)
    
    return () => clearInterval(interval); // تنظيف الدورة عندما يتم تفريغ المكون
  }, [setTarget3]);

  useEffect(() => {
    const interval = setInterval(() => {
      // تحديث القيمة التقدم بمقدار معين في كل دورة
      setProgress4(prevProgress4 => {
        const diff = tareget4 - prevProgress4;
        const increment = diff > 10 ? 10 : diff; // تحديد حجم الخطوة لتفادي القفزات الكبيرة
        return prevProgress4 + increment;
      });

      // التوقف عندما نصل إلى النسبة المطلوبة
      if (progress4 >= tareget4) {
        clearInterval(interval);
      }
    }, 200); // كل 200 ميلي ثانية (نصف ثانية)
    
    return () => clearInterval(interval); // تنظيف الدورة عندما يتم تفريغ المكون
  }, [setTarget4]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      // تحديث القيمة التقدم بمقدار معين في كل دورة
      setProgress5(prevProgress5 => {
        const diff = tareget5 - prevProgress5;
        const increment = diff > 10 ? 10 : diff; // تحديد حجم الخطوة لتفادي القفزات الكبيرة
        return prevProgress5 + increment;
      });

      // التوقف عندما نصل إلى النسبة المطلوبة
      if (progress5 >= tareget5) {
        clearInterval(interval);
      }
    }, 200); // كل 200 ميلي ثانية (نصف ثانية)
    
    return () => clearInterval(interval); // تنظيف الدورة عندما يتم تفريغ المكون
  }, [setTarget5]);





  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmed Saber </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I am currently employed as a software developer as free lansing.
            <br />
            <br />
            <br />
            
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" ,marginBottom:"50px",justifyContent:"center"}}>
             my skils rating
            </h1>

            <Container className="w-75 ">


              <span> html</span>
            <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example"  aria-valuemin="0" aria-valuemax="200">
                    <div className=" progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress5}%` }}> {progress5}% </div>
                  </div>
                  <span> css</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress5}%` }}> {progress5}% </div>
                  </div>
                  <span> bootstrap</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress2}%` }}> {progress2}% </div>
                  </div>
                  <span> JQury</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress3}%` }}> {progress3}% </div>
                  </div>
                  <span> typescript</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress3}%` }}> {progress3}% </div>
                  </div>
                  <span> Javascript</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress5}%` }}> {progress5}% </div>
                  </div>
                  <span> react</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress4}%` }}> {progress4}% </div>
                  </div>
                  <span> node js</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress5}%` }}> {progress5}% </div>
                  </div>
                  <span> express </span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated  bg-danger" style={{ width: `${progress5}%` }}> {progress5}% </div>
                  </div>
                  <span> mongo db</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress5}%` }}> {progress5}% </div>
                  </div>
                  <span> soket.io</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress2}%` }}> {progress2}% </div>
                  </div>
                  <span> git</span>
                  <div className=" mb-3 progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress4}%` }}> {progress4}% </div>
                  </div>
              
            </Container>
          </p>

            <br />
            <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
