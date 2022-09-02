import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Landing() {
  return (
    <div className={`${styles.container} w-screen flex text-center items-center`}>
      <div className='w-1/2 inline-block justify-center self-end mb-10'><Image src='https://upload.wikimedia.org/wikipedia/pt/thumb/8/8a/Better_Call_Saul_logo.svg/1200px-Better_Call_Saul_logo.svg.png' width='300px' height='140px'/></div>
      <div><Link href='/home'><Image src='https://static.wikia.nocookie.net/breakingbad/images/e/e6/Site-logo.png/revision/latest?cb=20210518011402' width='320px' height='320px' className='cursor-pointer hover:scale-90 hover:rotate-12 duration-300'/></Link></div>
      <div className='w-1/2 inline-block justify-center self-start mb-2'><Image src='https://cdn.freebiesupply.com/logos/thumbs/2x/breaking-bad-logo.png' width='300px' height='240px'/></div>
    </div>
  )
}
