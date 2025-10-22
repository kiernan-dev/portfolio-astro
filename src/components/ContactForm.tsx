import React, { useState, useRef } from 'react'

type StatusType = {
    status: boolean,
    message: string
}

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current) return

        const name = NameRef?.current?.value as string;
        const email = EmailRef?.current?.value as string;
        const message = MessageRef?.current?.value as string;

        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                throw new Error('🙄 Invalid Email ID!')
            }

            setisLoading(true)
            
            // Send to contact API
            const API_BASE = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api';
            const response = await fetch(`${API_BASE}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    subject: `Contact from ${name}`,
                    message: message
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message')
            }

            setMailStatus({ status: true, message: "✅ Message sent successfully!" })
            setisLoading(false)

            NameRef.current.value = ""
            EmailRef.current.value = ""
            MessageRef.current.value = ""
        } catch (error: { message: string } | any) {
            setMailStatus({ status: false, message: error.message })
            setisLoading(false)
        } finally {
            setTimeout(() => {
                setMailStatus({ status: false, message: "" })
            }, 3000);
        }
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2 text-white"
            >
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2 text-white"
            >
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2 text-white"
            >
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md"
                    type="submit"
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <>
                                <span>Sending</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                            </>
                        ) : (
                            <>
                                <span>Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                            </>
                        )
                    }
                </button>
                <span>{mailStatus.message}</span>
            </div>
        </form>
    )
}

export default ContactForm