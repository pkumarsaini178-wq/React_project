import React from 'react'
import Leftsideofpage from './leftsideofpage'
import Rightsidepage1 from './Rightsidepage1'

const Pagecontain1 = () => {
  const arr = [
    {
      indexValue: 1,
      image: "https://images.pexels.com/photos/4061007/pexels-photo-4061007.jpeg",
      text: "Prime customers, that have access to banking products and are satisfied with the current product.",
      submit: "SATISFIED",
    },
    {
      indexValue: 2,
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      text: "Customers who are satisfied but may have additional banking needs or opportunities.",
      submit: "APPLY",
    },
    {
      indexValue: 3,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      text: "Customers who are looking for new banking products or want to improve their current experience.",
      submit: "SUBMIT",
    },
  ];

  return (
    <div className="flex items-start gap-6 bg-white p-8 overflow-x-auto min-h-screen">
      <Leftsideofpage />

      <div className="flex items-center gap-6 overflow-x-auto pb-4">
        {arr.map((elem) => (
          <Rightsidepage1 
            
            indexValue={elem.indexValue}
            image={elem.image}
            text={elem.text}
            submit={elem.submit}
          />
        ))}
            
      </div>
    </div>
  )
}

export default Pagecontain1