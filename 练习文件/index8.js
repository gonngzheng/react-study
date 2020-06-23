import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Vote from '../src/component/Vote/Vote'
// import ReactSwipe from 'react-swipe'
// import './less/index.less'
// const Carousel = () => {
//     let reactSwipeEl;
  
//     return (
//       <div>
//         <ReactSwipe
//           className="carousel"
//           swipeOptions={{ continuous: true,auto:300 }}
//           ref={el => (reactSwipeEl = el)}
//         >
//           <div>PANE 1</div>
//           <div>PANE 2</div>
//           <div>PANE 3</div>
//         </ReactSwipe>
//         <button onClick={() => reactSwipeEl.next()}>Next</button>
//         <button onClick={() => reactSwipeEl.prev()}>Previous</button>
//       </div>
//     );
//   };
  
//   ReactDOM.render(<Carousel />, document.getElementById('root'));

ReactDOM.render(<main>
    <Vote title={'资本追求低风险高收益'}
        count={{n:100,m:78}}
    >
    </Vote>
    </main>, document.getElementById('root'));