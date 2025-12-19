import {
  Html,
  Body,
  Container,
  Text,
  Button,
  Head,
  Preview,
} from "@react-email/components";

type ResetPasswordEmailProps = {
  resetUrl: string;
};

export function ResetPasswordEmail({ resetUrl }: ResetPasswordEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>

      <Body style={{ backgroundColor: "#f6f9fc" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "8px",
          }}
        >
          <Text>Hello,</Text>

          <Text>
            You requested to reset your password. Click the button below.
          </Text>

          <Button
            href={resetUrl}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "6px",
            }}
          >
            Reset Password
          </Button>

          <Text>
            If you didn’t request this, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
