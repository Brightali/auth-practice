import { render } from "@react-email/render";
import { Resend } from "resend";
import { ResetPasswordEmail } from "@/components/emails/Reset-password-email-template";
export const resend = new Resend(process.env.RESEND_API_KEY);

// default sender email address use your verified domain
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

type SendResetEmailParams = {
  to: string;
  resetUrl: string;
};

export async function sendResetPasswordEmail({
  to,
  resetUrl,
}: SendResetEmailParams) {
  await resend.emails.send({
    from: FROM_EMAIL as string,
    to,
    subject: "Reset your password",
    html: await render(ResetPasswordEmail({ resetUrl })),
  });
}
