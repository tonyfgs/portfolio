import {contactInfo, ContactInfo} from "@/model/contact-info";

export function ContactSection() {
    const contact_info: ContactInfo = contactInfo;
    return (
        <section id="contact" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 m-4 rounded-[2rem] border border-border bg-card/50 ">


        <div  className="flex items-center gap-4 z-20">
            <div>
                <h2 className="text-xl font-bold leading-tight">
                    {contact_info.name}
                </h2>
                <h2 className="text-xl font-bold leading-tight">
                    {contact_info.email}
                </h2>
            </div>
            <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold leading-tight">
                    {contact_info.github}
                </h2>
                <h2 className="text-xl font-bold leading-tight">
                    {contact_info.linkedin}
                </h2>
            </div>
        </div>
        </section>
    )
    
}