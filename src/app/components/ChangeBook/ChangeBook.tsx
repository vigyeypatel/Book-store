import React from 'react';


export default function ChangeBook(props:any) {
        
        return(
            <>
            <section>
                <h2>Admin - Add Book</h2>
            </section>
            
                <form>
                <label htmlFor="title">
                Book Title: </label>
                <input name="name" id="title"   value={props.book.name} onChange= { (e) => props.actions.HandleValue(e.target.name,e.target.value) } />
                
                <label htmlFor="author">
                Author: </label>
                <input name="author" value={props.book.author} onChange= { (e) => props.actions.HandleValue(e.target.name,e.target.value) } />
               
                <label htmlFor="pages">
                Pages: </label>
                <input name="pages" value={props.book.pages} onChange= { (e) => props.actions.HandleValue(e.target.name,e.target.value) } />
            
                <label htmlFor="category">
                Category: </label>
                <input name="category" value={props.book.category} onChange= { (e) => props.actions.HandleValue(e.target.name,e.target.value) } />
                
                <label htmlFor="price">
                Price: </label>
                <input name="price" value={props.book.price} onChange= { (e) => props.actions.HandleValue(e.target.name,e.target.value) } />
            
                </form>
                <button onClick={()=> props.actions.AddBookApi(props.book,props.book.id, props.index)} >Add to database</button>
                
             </>


        );
}