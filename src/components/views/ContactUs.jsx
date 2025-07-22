import React from 'react'

const ContactUs = () => {
    return (

        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
                <p className="mb-4 text-center">Phone: +92-306-4447318| Email: muhammadmuaaz64@gmail.com</p>
                <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded" />
                    <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded" />
                    <textarea name="message" rows={5} placeholder="Your Message" required className="w-full p-3 border rounded" defaultValue={""} />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
                </form>
            </div>
        </section>

    )
}

export default ContactUs