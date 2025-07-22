import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
  newsletter: boolean
}

interface FormErrors {
  [key: string]: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.length < 2) return 'Name must be at least 2 characters long'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.length < 10) return 'Message must be at least 10 characters long'
        return ''
      
      default:
        return ''
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message']
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData] as string)
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const simulateFormSubmission = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        const success = Math.random() > 0.1
        
        if (success) {
          resolve()
        } else {
          reject(new Error('Network error'))
        }
      }, 2000)
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // In a real application, this would be an API call
      await simulateFormSubmission()
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        newsletter: false
      })
      setErrors({})
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      setSubmitStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldClass = (fieldName: string): string => {
    if (errors[fieldName]) return 'form-group error'
    if (formData[fieldName as keyof FormData] && !errors[fieldName]) return 'form-group success'
    return 'form-group'
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className={getFieldClass('name')}>
        <label htmlFor="name" style={{ fontFamily }}>Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
          style={{ fontFamily }}
        />
        {errors.name && <span className="error-message" style={{ fontFamily }}>{errors.name}</span>}
      </div>
      
      <div className={getFieldClass('email')}>
        <label htmlFor="email" style={{ fontFamily }}>Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
          style={{ fontFamily }}
        />
        {errors.email && <span className="error-message" style={{ fontFamily }}>{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="company" style={{ fontFamily }}>Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          style={{ fontFamily }}
        />
      </div>
      
      <div className={getFieldClass('subject')}>
        <label htmlFor="subject" style={{ fontFamily }}>Subject *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
          style={{ fontFamily }}
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="sales">Sales Question</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <span className="error-message" style={{ fontFamily }}>{errors.subject}</span>}
      </div>
      
      <div className={getFieldClass('message')}>
        <label htmlFor="message" style={{ fontFamily }}>Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
          style={{ fontFamily }}
        />
        {errors.message && <span className="error-message" style={{ fontFamily }}>{errors.message}</span>}
        <div className="character-counter" style={{ fontFamily }}>
          {formData.message.length}/500 characters
        </div>
      </div>
      
      <div className="form-group">
        <label className="checkbox-label" style={{ fontFamily }}>
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleInputChange}
          />
          <span className="checkmark"></span>
          Subscribe to our newsletter for updates
        </label>
      </div>
      
      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
        style={{ fontFamily }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="form-success-message" style={{ fontFamily }}>
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="form-error-message" style={{ fontFamily }}>
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  )
}

export default ContactForm 