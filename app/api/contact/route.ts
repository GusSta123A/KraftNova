import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // Support comma-separated list of recipients
    const recipients = process.env.CONTACT_EMAIL || process.env.SMTP_USER || "";

    const now = new Date().toLocaleString("es-SV", {
      timeZone: "America/El_Salvador",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Load logo as base64 so it renders in all email clients without needing a live domain
    let logoBase64 = "";
    // TODO: Update when KraftNova has a new PNG logo
    // try {
    //   const logoPath = path.join(process.cwd(), "public", "logo.png");
    //   const logoBuffer = fs.readFileSync(logoPath);
    //   logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;
    // } catch {
    //   // Logo not found — will fall back to text
    // }

    const mailOptions = {
      from: `"KraftNova Web" <${process.env.SMTP_USER}>`,
      to: recipients,
      replyTo: email,
      subject: `🔥 ¡Nuevo prospecto! ${name}${company ? ` de ${company}` : ""} quiere contactarlos`,
      text: [
        `¡NUEVO PROSPECTO INTERESADO!`,
        `Fecha: ${now}`,
        `---`,
        `Nombre: ${name}`,
        `Correo: ${email}`,
        company ? `Empresa: ${company}` : "",
        role ? `Rol: ${role}` : "",
        service ? `Servicio de interés: ${service}` : "",
        `\nMensaje:\n${message}`,
        `\n---`,
        `Responde directamente a: ${email}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0f1729;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1729;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.5);">

          <!-- HEADER with logo -->
          <tr>
            <td style="background:linear-gradient(135deg,#ec4899 0%,#a855f7 55%,#0ea5e9 100%);padding:36px 32px 28px;text-align:center;">
              ${logoBase64
                ? `<img src="${logoBase64}" alt="KraftNova" width="160" style="max-width:160px;height:auto;display:block;margin:0 auto 12px;" />`
                : `<p style="margin:0 0 12px;font-size:24px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">KraftNova</p>`
              }
              <p style="margin:0;font-size:13px;font-weight:600;color:rgba(255,255,255,0.65);letter-spacing:1px;">Portal de Contacto Web</p>
            </td>
          </tr>

          <!-- ALERT BANNER -->
          <tr>
            <td style="background:#FFAB40;padding:18px 32px;text-align:center;">
              <p style="margin:0;font-size:18px;font-weight:900;color:#1e293b;letter-spacing:-0.3px;">
                ⚡ ¡Nuevo prospecto interesado!
              </p>
              <p style="margin:6px 0 0;font-size:13px;color:rgba(0,0,0,0.50);">${now}</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:36px 32px;">

              <!-- Intro -->
              <p style="margin:0 0 28px;font-size:15px;color:#475569;line-height:1.7;">
                Alguien completó el formulario de contacto en <strong>kraftnova.com</strong>. Aquí están sus datos para que puedan darle seguimiento lo antes posible.
              </p>

              <!-- Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:28px;">
                <tr style="background:#f8fafc;">
                  <td colspan="2" style="padding:14px 20px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Datos del Prospecto</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;white-space:nowrap;width:130px;">Nombre</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:15px;font-weight:700;color:#1e293b;">${name}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;">Correo</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:15px;">
                    <a href="mailto:${email}" style="color:#3A5AFE;text-decoration:none;font-weight:600;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;">Empresa</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:15px;color:#1e293b;font-weight:600;">${company}</td>
                </tr>` : ""}
                ${role ? `
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;">Rol</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f0f4f8;font-size:15px;color:#1e293b;">${role}</td>
                </tr>` : ""}
                ${service ? `
                <tr>
                  <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;">Servicio</td>
                  <td style="padding:14px 20px;">
                    <span style="display:inline-block;background:#EFF6FF;color:#3A5AFE;padding:6px 16px;border-radius:20px;font-size:13px;font-weight:700;border:1px solid #BFDBFE;">${service}</span>
                  </td>
                </tr>` : ""}
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;">Su Mensaje</p>
              <div style="background:#f8fafc;border-left:4px solid #3A5AFE;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:36px;">
                <p style="margin:0;font-size:15px;color:#334155;line-height:1.8;font-style:italic;">"${message.replace(/\n/g, "<br/>")}"</p>
              </div>

              <!-- CTA Button — brand colors -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Gracias por contactar a KraftNova"
                       style="display:inline-block;background:#ec4899;color:#ffffff;text-decoration:none;padding:16px 40px;border-radius:50px;font-size:15px;font-weight:800;letter-spacing:0.3px;box-shadow:0 4px 20px rgba(236,72,153,0.4);border:2px solid #be185d;">
                      ✉️ &nbsp;Responder a ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0f172a;padding:24px 32px;text-align:center;">
              ${logoBase64
                ? `<img src="${logoBase64}" alt="KraftNova" width="90" style="max-width:90px;height:auto;display:block;margin:0 auto 10px;opacity:0.5;" />`
                : `<p style="margin:0 0 6px;font-size:12px;font-weight:700;color:rgba(255,255,255,0.4);">KraftNova</p>`
              }
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.3);">
                Este correo fue generado automáticamente por el formulario de contacto de kraftnova.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al enviar el correo" },
      { status: 500 }
    );
  }
}
