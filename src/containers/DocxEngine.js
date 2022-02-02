import React, { Component } from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import "./DocxEngine.css";

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

class DocxEngine extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.main) {
            var cvMainCv = this.props.main.cv;
        }
        if (this.props.resume) {
            var cvResumeTree = this.props.resume;
        }
        if (this.props.certifications) {
            var cvCertificationTree = this.props.certifications;
        }

        {/*url: `${process.env.PUBLIC_URL}/resumeData.json`,*/ }
        const generateDocument = () => {
            loadFile(

                "io/blob/CV_Leoni.generated.docx",
                function (error, content) {
                    if (error) {
                        console.log("ERROR is " + error);
                        throw error;
                    }
                    const zip = new PizZip(content);
                    const doc = new Docxtemplater(zip, {
                        paragraphLoop: true,
                        linebreaks: true,
                    });

                    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                    doc.render(cvMerkleTree);
                    const out = doc.getZip().generate({
                        type: "blob",
                        mimeType:
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    }); //Output the document using Data-URI
                    saveAs(out, "output.docx");
                }
            );
        };

        return (
            <div className="p-2">
                <button onClick={generateDocument}>
                    Generate document
                </button>
            </div>
        );
    }
};

export default DocxEngine;