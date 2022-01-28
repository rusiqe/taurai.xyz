export const sendEmail = async (data: { name: string; email: string; message: string }) => {
	const sgMail = require('@sendgrid/mail')

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const { name, email, message } = data

	const emailToFrom = {
		to: 'hey@olivercederborg.com',
		from: 'hey@olivercederborg.com'
	}

	const content = {
		to: emailToFrom.to,
		from: emailToFrom.from,
		replyTo: email,
		subject: `New Message From: ${name}`,
		text: message,
		html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          Message: ${message}
          </p>`
	}

	try {
		await sgMail.send(content)
	} catch (error: any) {
		throw new Error(error)
	}
}