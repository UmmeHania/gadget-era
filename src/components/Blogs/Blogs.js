import React from 'react';

const Blogs = () => {
    return (
        <div>

            <h1 className='font-sans font-bold text-xl text-black mx-10'>1.What is Context API?</h1>
            <p className='font-sans text-lg text-gray-600 mx-10 mb-5'>In React framework,Context API is playing a role as a component structure.It enables us to pass specific forms of data across all levels of the application.Context allows passing data through the component tree without passing props down manually at every level.We passed data in a top-down approach via props in React application. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.
            </p>

            <h1 className='font-sans font-bold text-xl text-black mx-10'>2.What is Semantic Tag?</h1>
            <p className='font-sans text-lg text-gray-600 mx-10 mb-5'>
                Semantic tags clearly define the purpose of the HTML element which is both human and machine readable. It also narrates the type of content that the element should contain.For example, 'nav' ,'aside', 'header' ,'footer' are considered semantic elements as they clearly narrates their purpose and the type of content they should enclose. By using semantic tag,we can
                make our website more accessible,SEO friendly and easy to maintenance. The pages made with semantic elements are much easier to read.
                It has greater accessibility. It offers a better user experience.


            </p>
            <h1 className='font-sans font-bold text-xl text-black mx-10'>3.What is the difference between inline,block and inline-block elements?</h1>
            <p className='font-sans text-lg text-gray-600 mx-10 mb-5'>
                Inline element refers that doesn't start on a new line and only occupy just the width it requires. On the other hand ,Block level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.In the inline-block element it displays an element as an inline-level block container. The height and width values can be reset.


            </p>
        </div>

    );
};

export default Blogs;