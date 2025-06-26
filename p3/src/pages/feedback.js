import React, { useState } from 'react';
import './feedback.css'
function FeedbackForm() {
    const [form, setForm] = useState({ name: '', email: '', feedback: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        try {
            const response = await fetch('/api/proxy', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await response.json();
            console.log(result);
            if (result.result === 'success') setStatus('Thank you for your feedback!');
            else setStatus('Thank you for your feedback!');
        } catch (err) {
            setStatus('Thank you for your feedback!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <textarea name="feedback" placeholder="Your Feedback" value={form.feedback} onChange={handleChange} required />
            {status && <div className="status-message">{status}</div>}
            {(!status || status === "Submitting...") && (
                <button type="submit">Submit</button>
            )}

        </form>
    );
}

export default FeedbackForm;
