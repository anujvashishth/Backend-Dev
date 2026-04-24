import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createLogger } from "winston";
import logger from "../logger/log.js";

function htmltemplate(email, otp) {
    return `<!-- Complete Email template -->
<body style="background-color:grey">
    <table align="center" border="0" cellpadding="0" cellspacing="0"
           width="550" bgcolor="white" style="border:2px solid black">
        <tbody>
            <tr>
                <td align="center">
                    <table align="center" border="0" cellpadding="0" 
                           cellspacing="0" class="col-550" width="550">
                        <tbody>
                            <tr>
                                <td align="center" style="background-color: #4cb96b;
                                           height: 50px;">

                                    <a href="#" style="text-decoration: none;">
                                        <p style="color:white;
                                                  font-weight:bold;">
                                          welcome to Stock Market ${email.split("@")[0]}
                                        </p>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 300px;">
                <td align="center" style="border: none;
                           border-bottom: 2px solid #4cb96b; 
                           padding-right: 20px;padding-left:20px">

                    <p style="font-weight: bolder;font-size: 42px;
                              letter-spacing: 0.025em;
                              color:black;">
                        ${otp}
                     
                    </p>
                </td
            </tr>

            <tr style="display: inline-block;">
                <td style="height: 150px;
                           padding: 20px;
                           border: none; 
                           border-bottom: 2px solid #361B0E;
                           background-color: white;">
                  
                    <h2 style="text-align: left;
                               align-items: center;">
                        Design Patterns : A Must Skill to 
                      have for Software Developers in 2019
                   </h2>
                    <p class="data" 
                       style="text-align: justify-all;
                              align-items: center; 
                              font-size: 15px;
                              padding-bottom: 12px;">
                        Design Patterns….??? I think you have heard this name 
                      before in programming… Yes, you might have heard 
                      this name before in programming if you are…
                    </p>
                    <p>
                        <a href=
"https://www.geeksforgeeks.org/blogs/design-patterns-a-must-skill-to-have-for-software-developers-in-2019/"
                           style="text-decoration: none; 
                                  color:black; 
                                  border: 2px solid #4cb96b; 
                                  padding: 10px 30px;
                                  font-weight: bold;"> 
                           Read More 
                      </a>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</body>`
}





async function sendMail(email, otp) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        try {
            const info = await transporter.sendMail({
                from: `Stock Market" <${process.env.EMAIL}>`, // sender address
                to: email, // recipient
                subject: "Hello", // subject line
                text: "Hello world?", // plain text body
                html: htmltemplate(email, otp)
            });

            console.log("Message sent: %s", info.messageId);
            // Preview URL is only available when using an Ethereal test account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (err) {
            console.error("Error while sending mail:", err);
        }


    }
    catch (error) {
        logger.error(`Error at ${new Date().toISOString()}  ${error.message}`);
        console.log(error);
    }
}
export default sendMail










