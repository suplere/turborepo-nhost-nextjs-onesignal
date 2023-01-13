import * as jose from "jose";
import axios from "axios";

const apiSecret: string = process.env.JOILMAIL_JWT_SECRET!;
const baseUrl: string = process.env.JOILMAIL_BASE_URL!;

export interface JOILMAIL_SEND_EMAIL {
  to: string[];
  cc?: string[];
  bc?: string[];
  template: string;
  params: any;
}

export const sentJoilmailEmail = async (params: JOILMAIL_SEND_EMAIL) => {
  const jwtToken = await new jose.SignJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .sign(Buffer.from(apiSecret));

  const data = {
    from: "app@supler.eu",
    to: params.to,
    params: params.params,
  };

  try {
    const resp = await axios.post(`${baseUrl}/atk-${params.template}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    // console.log(resp.status);
    return resp;
  } catch (error) {
    console.log("ERROR", error);
  }
  return false;
};
