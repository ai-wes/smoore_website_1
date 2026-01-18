
import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        need: 'PR & Media Relations',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        alert(`Thank you, ${formData.name}. Your request has been sent.`);
    };

    return (
        <PageShell>
            <SectionHeader
                title="Let’s build the next 90 days."
                subtitle="Fill out the form below, and we'll be in touch to schedule a consultation."
            />

            <div className="mt-16 max-w-2xl mx-auto">
                <div className="bg-black/20 border border-[var(--border-color)] rounded-xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)]">Name</label>
                            <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full bg-transparent border border-[var(--border-color)] rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 ring-accent"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)]">Email</label>
                            <input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full bg-transparent border border-[var(--border-color)] rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 ring-accent"/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)]">Company</label>
                            <input type="text" name="company" id="company" onChange={handleChange} className="mt-1 block w-full bg-transparent border border-[var(--border-color)] rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 ring-accent"/>
                        </div>
                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-[var(--text-primary)]">Website</label>
                            <input type="url" name="website" id="website" onChange={handleChange} className="mt-1 block w-full bg-transparent border border-[var(--border-color)] rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 ring-accent"/>
                        </div>
                        <div>
                            <label htmlFor="need" className="block text-sm font-medium text-[var(--text-primary)]">What do you need most right now?</label>
                            <select id="need" name="need" onChange={handleChange} value={formData.need} className="mt-1 block w-full bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 ring-accent">
                                <option>PR & Media Relations</option>
                                <option>Messaging & Narrative</option>
                                <option>Research & Insights</option>
                                <option>Digital & Web</option>
                                <option>Content (Decks, Papers, etc.)</option>
                                <option>Something else</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--bg-dark)] bg-accent hover:bg-[#d4b071] focus:outline-none focus:ring-2 focus:ring-offset-2 ring-accent focus:ring-offset-[var(--bg-dark)]">
                                Request Consultation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageShell>
    );
};

export default ContactPage;