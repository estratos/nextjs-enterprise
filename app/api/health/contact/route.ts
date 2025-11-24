import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, service, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_FROM || 'contacto@empresati.com',
      to: process.env.CONTACT_EMAIL || 'info@empresati.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nuevo Mensaje de Contacto</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
            <p><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #374151;">Mensaje:</h3>
            <p style="background: #f1f5f9; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${message}
            </p>
          </div>
        </div>
      `,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}