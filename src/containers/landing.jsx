import React from 'react';

import TodosContainer from './todos';

class Landing extends React.Component {
  render() {
    return (
      <section className="section-intro">
         <div className="container-fluid">
           <div className="row text-center">
             <div className="col-xs-12">
               <div className="col-xs-12 col-md-8 col-md-offset-2">
                 <h2 className="h2-intro">TodoMVC</h2>
                 <TodosContainer />
               </div>
             </div>
           </div>
         </div>
       </section>
    );
  }
};

export default Landing;
