import { FaInstagram } from 'react-icons/fa6'

export default function Index() {
  return (
    <footer className='bg-primary-color text-secondary-color w-full absolute bottom-0 p-3 flex flex-col items-center'>
      <p className='pb-2'>
        © Todos los derechos reservados a Loopy
      </p>
      <a href="https://www.instagram.com/itsloopy_sc/profilecard/?igsh=MTB1MDNuM3ptbzV0Zg==" target='blank'>
        <FaInstagram fontSize={20} />
      </a>
    </footer>
  )
}
