import './App.css';

function App() {
  return (
    <>

      <div>
        <img className='backgroundpic' src="/copy.png" alt='' />
      </div>
      <div className='box-2'>
        <h2>Sign-in</h2>
      </div>
      <div>
        <center>
          <h1 className='heading-of-buton'>Unlimited movies, TV shows, and more </h1>
          <p className='p-o-b'>Starts at Rs 250. Cancel anytime.</p>
        </center>
      
      <div className='box-1'><h2>Get Started </h2>
      </div>
      <div>
        <form>
          <input
            type='email'
            name='email_address'
            placeholder='Type Your Email Address'
            className='input'
            required
          />
        </form>
      </div>
    </div >
      <div className='start-now'>
        <h1>Start Now</h1>
      </div>
      <div className='trend'>
        <h1>Trending</h1>
      </div>
      <div className='ebox1'>
        <h2>Conversion Focus</h2>
        <p classname='ep-1'>They are designed to streamline the process of 
          acquiring user information (such as email) and 
          directing the user toward the final subscription 
          commitment.</p>
      </div>
       <div className='ebox2'>
        <h2>Encapsulation</h2>
        <p>By using clear boxes and distinct boundaries, 
          the system effectively encapsulates the required
           data input (e.g., the email field and the "Get 
           Started" button), making the call-to-action
            unambiguous.</p>
      </div>
       <div className='ebox3'>
        <h2>Simplified Design</h2>
        <p>This design choice is part of Netflix's 
          strategy to maintain a simple, clean, and
           highly effective user journey.</p>
      </div>
      <div className='trendpic'>
        <img src='/icon.png' alt=''width={70}/>
      </div>
      <h1 className='end'>HELLO</h1>
      
      
       
    </>
  );
}

export default App;
