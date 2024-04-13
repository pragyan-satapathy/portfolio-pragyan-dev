import { tools } from '../../../portfolio'
import './ToolsUsed.css'

const Skills = () => {
  if (!tools.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Tools Used</h2>
      <ul className='tools__list'>
        {tools.map((tool, index) => (
          <li key={index} className='tools__list-item btn btn--plain'>
            {tool}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
