import { contact } from '../../portfolio'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Email from '@material-ui/icons/Email'
import './Contact.css'

const Contact = () => {
  if (!contact) return null
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='center'>

        <>
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label='email'
              className='link link--icon contact__card'
            >
              <Email />
            </a>
          )}

          {contact.github && (
            <a
              href={contact.github}
              target='_blank'
              aria-label='github'
              className='link link--icon contact__card'
            >
              <GitHubIcon />
            </a>
          )}

          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target='_blank'
              aria-label='linkedin'
              className='link link--icon contact__card'
            >
              <LinkedInIcon />
            </a>
          )}
        </>
      </div>
    </section>
  )
}

export default Contact
