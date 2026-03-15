import { useState } from 'react'
import './hireme.css'
import { Send, User, Building2, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

function HireMe() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    formData.append('access_key', '0c76ab26-be5e-4f96-9019-25c1070ff426')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="hireme-page">
      <div className="hireme-container">
        {/* Header */}
        <div className="hireme-header">
          <h1 className="hireme-title">
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className="hireme-subtitle">
            Have a project in mind? Fill the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="hireme-card">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="to" value="working.gelson@gmail.com" />

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="hireme-name">
                  <User size={16} />
                  Name / Nome
                </label>
                <input
                  type="text"
                  id="hireme-name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="hireme-company">
                  <Building2 size={16} />
                  Company / Empresa
                </label>
                <input
                  type="text"
                  id="hireme-company"
                  name="company"
                  placeholder="Your company (optional)"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="hireme-email">
                <Mail size={16} />
                Email
              </label>
              <input
                type="email"
                id="hireme-email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="hireme-message">
                <MessageSquare size={16} />
                Message / Mensagem
              </label>
              <textarea
                id="hireme-message"
                name="message"
                required
                placeholder="Tell me about your project, goals, and timeline..."
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`hireme-submit ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'idle' && (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
              {status === 'sending' && (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle size={18} />
                  Sent Successfully!
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle size={18} />
                  Failed — Try Again
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HireMe
