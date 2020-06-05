import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'; 
import './index.css';
import './button.css';

 const SocialButton = ({type}) => (
  <button className={type === 'instagram' ?   "fa fa-instagram": ""}></button>
 );

 const TwitterButton = ({kind}) => {
  let className = "" ; 
    if (kind === "twitter") {
     className="fa fa-facebook"                            
                            }
  return  (
   <button className={className}></button>
  );
 };

const FacebookButton = ({kind}) => {
  let className="";
  if (kind="facebook") {
       className="fa fa-twitter"
                         }
  return (
    <button className={className}></button>
  );
 };

const IconBar = ({orientation}) => {
  let typeOrientation ="";
  if (orientation==="horizontal") {
    typeOrientation="icon-bar-horizontal"
  } else if (orientation=== "vertical") {
    typeOrientation="icon-bar-vertical"
  }
return (
<div className={typeOrientation}>
  <a className="active" href="#"><i className="fa fa-home"></i></a> 
  <a href="#"><i className="fa fa-search"></i></a> 
  <a href="#"><i className="fa fa-envelope"></i></a> 
  <a href="#"><i className="fa fa-globe"></i></a>
  <a href="#"><i className="fa fa-trash"></i></a> 
</div>
);
};


class  Navbar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      initialActiveItemId: "Home",
    }
  }
   render (){
   return (
<div  className="navbar">
 <a 
       onClick = {() => {
        this.setState ({
          initialActiveItemId: "Home"
        })
      }}
  className={this.state.initialActiveItemId==="Home"?"active":""} href="#"><i className="fa fa-fw" ></i> {this.props.items[0].name}</a> 
   <a  
          onClick = {() => {
            this.setState ({
              initialActiveItemId: "Search"
            })
          }}
 className={this.state.initialActiveItemId==="Search"?"active":""}   href="#"><i className="fa fa-fw" ></i> {this.props.items[1].name}</a> 
   <a 
             onClick = {() => {
              this.setState ({
                initialActiveItemId: "About"
              })
            }}
   className={this.state.initialActiveItemId==="About"?"active":""}   href="#"><i className="fa fa-fw"></i> {this.props.items[2].name}</a> 
</div>
);
};
};

class ListOfCosts extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      moneyAndDescription: [
        {
         id: "",
         money: "",
         description: "",
        }
      ],
      money: "",
      description:"",
    };
  } 
  onDelete=(id) => {
    console.log(id)
    const moneyDescription =[...this.state.moneyAndDescription];
    moneyDescription.filter(
     (md)=> md.id!==id
      )
   
    this.setState (
      moneyDescription,
    )
  };
  render () {
    return (
        <div>
        <form onSubmit ={(e)=> e.preventDefault()}>
          <label htmlFor="money"> Amount of Money </label>
          <input
          value = {this.state.money}
          onChange = {(e) => this.setState({
            money: e.target.value,
          })}          
         type="text"/>
          <label htmlFor="costs"> Description of Costs </label> 
          <input
          value = {this.state.description}
          onChange = {(e) => this.setState({
            description: e.target.value,
          })}
          type="text"/>
          <button
          onClick={() => {
            const moneyAndDescription = [
              ...this.state.moneyAndDescription,
              {
              id: Math.round(Math.random()*10000),
              money:this.state.money,
              description:this.state.description
             },       
             ];
            this.setState({
            moneyAndDescription,
            money: "",
            description: "",
          })
          }}
          >
          Add
          </button>
           </form>  
           <div>
        {this.state.moneyAndDescription.map((unit)=> (
          <p key={unit.id}>
            {unit.money}{" "}
          {unit.description}{" "}
        {unit.id!==""?<button
                                        onClick={() => this.onDelete(unit.id)}>
                                          Delete</button>:""}
          </p> 
))}
</div>
      </div>
    )
  }
}

 const buttons = (
   <div>
     <SocialButton 
        type="instagram"
      />
     <TwitterButton 
        kind="twitter"
      />
      <FacebookButton
        kind="facebook"
      />
    </div>
 );
 
 const icons = (
   <div>
     <IconBar 
      orientation="horizontal"
      />
         <IconBar 
      orientation="vertical"
      />
   </div>
 );

 const navbar = (
  <div>
    <Navbar 
     items={[
       {id: 1, name:'Home'},
        {id: 2, name: 'Search'},
        {id: 3, name: 'About'}
      ]}
     initialActiveItemId="Home"
      />
  </div>
 );

 const listOfCosts = (
 <div>
 <ListOfCosts />
 </div>
 )

ReactDOM.render(
buttons,  document.getElementById('root')
);

ReactDOM.render(
 icons, document.getElementById('bar')
  );

ReactDOM.render(
  navbar, document.getElementById('navbar')
 );  

 ReactDOM.render(
  listOfCosts, document.getElementById('listOfCosts')
 );  