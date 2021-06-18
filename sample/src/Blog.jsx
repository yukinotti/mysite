import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar'; //相対パス
import Hoge from './components/hoge';

const Blog = () => {
	

	// componentDidMount(){
	// 	//ボタンがクリックされたらいいねをカウントアップする
	// 	document.getElementById('counter').addEventListener('click', () => this.countUp())
	// }

	// componentDidUpdate(){
	// 	if (this.state.count >= 10){
	// 		this.setState({count: 0})
	// 	}
	// }

	// //リソースの開放
	// componentWillUnmount(){
	// 	document.getElementById('counter').removeEventListener('click', () => this.countUp())
	// }

        //公開状態を反転させる関数


//         countUp = () => {
// 	         this.setState({count: this.state.count+1})
// }

		return (
		<>
                           <Article 
			   title={"Reactの基本知識"}
			  
			   //count={this.state.count}
			   /> 
			   <FooBar.Foo />
			   <FooBar.Bar />
			   <Hoge />
		</>
			
		)

}


export default Blog