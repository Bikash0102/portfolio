from flask import Flask, render_template, request
import smtplib
from email.message import EmailMessage
import ssl
from flask import Flask
app = Flask(__name__)




@app.route('/')
def home():
    return render_template('index.html')


@app.route('/sent', methods=['POST'])
def sent():
    while True:
        receiver_email = request.form.get('email')
        try:
            receiver_name = request.form.get('name')
            receiver_message = request.form.get('messages')
            receiver_contact = request.form.get('contact')

            smtp_server = 'smtp.gmail.com'
            port = 465
            sender_email = "bbbhowmik04@gmail.com"
            password = "alfmbulookkghnsf"
            message = 'Hi ' +  receiver_name + \
                ', Thanks for visiting my Portfolio. Thank You  for your Message and i will look into it soon! \nyours faithfully,\nBikash'

            msg = EmailMessage()
            msg.set_content(message)
            msg['Subject'] = "Bikash_Portfolio"
            msg['From'] = sender_email
            msg['To'] = receiver_email

            context = ssl.create_default_context()

            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                server.login(sender_email, password)
                server.send_message(msg)
            message = 'Name: ' +receiver_name +'\n Phone no:'+  receiver_contact+'\nSender mail'+ str(receiver_email) + '\n Sender message: ' + str(receiver_message) + '.'
            msg1 = EmailMessage()
            msg1.set_content(message)
            msg1['Subject'] = 'Portfolio Message'
            msg1['From'] = sender_email
            msg1['To'] = "bbbhowmik04@gmail.com"

            context = ssl.create_default_context()
            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                server.login(sender_email, password)
                server.send_message(msg1)
            return render_template('send.html')

        except smtplib.SMTPRecipientsRefused as e:
            error_message = "The recipient's email address was refused by the server."
            print(error_message)
            return render_template('error.html', error=error_message)
        except smtplib.SMTPAuthenticationError as e:
            error_message = "There was an error while trying to authenticate with the email server."
            print(error_message)
            return render_template('error.html', error=error_message)
        except smtplib.SMTPException as e:
            error_message = "There was an error while sending the email."
            print(error_message)
            return render_template('error.html', error=error_message)


if __name__ == "__main__":
    app.run(debug=True)