import Layout from './components/Layout';
import jerSelfie from './media/images/jerFranceCausal.jpg';

export default function Home() {
  return (
    <Layout>
      <div className='space-y-4'>
        <div className='sm:flex text-left'>
          <div>
            <h1 className='text-slate-300 sm:text-7xl text-4xl'>My name is Jeremiah Cadet</h1>
            <h2 className='text-slate-400 sm:text-4xl text-2xl'>Northeastern University student, aspiring Front-end Developer or Software Developer</h2>
            <h2 className='text-slate-400 sm:text-4xl text-2xl'>Graduating April 2024</h2>
          </div>
          <div>
            <img className='justify-center mx-auto sm:w-7/12 w-3/12' src={jerSelfie} alt='Jeremiah Cadet' />
          </div>
        </div>
        <p className='text-left text-lg'>
          I began studying at Northeastern University in 2020. My first year of school was completely online due to Covid, so my second year felt like my first year. I studied Computer Science with a concentration in Human-Centered Computing. During college, I completed two co-ops. Co-ops are essentially internships while I'm in college. My first internship was at {<a className='text-teal-200 hover:text-teal-600' href='/experience'>Optum</a>}, and my second internship was at {<a className='text-teal-200 hover:text-teal-600' href='/experience'>Hydrow</a>}. 
        </p>
      </div>
    </Layout>
  )
}
