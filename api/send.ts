import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_name, user_email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: 'alejfrossi@gmail.com', // Reemplaza por tu correo
      subject: `Nuevo mensaje en Portfolio de: ${user_name}`,
      reply_to: user_email,
      html: `
        <h2>Nuevo contacto desde el Portfolio</h2>
        <p><strong>Nombre:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}