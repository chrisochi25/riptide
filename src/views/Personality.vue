<template>
<div class = "form" v-if= "!isSubmitted">

	<form ref ='foam' @submit = "onSubmit" class = "add-form" >
	<ol>
	<li><strong>At parties do you:</strong><br>
			<div class="radio">
					<label for="q8">
					<input type="radio" id="q1" value="e" v-model="picked1" required>
					Stay late, with increasing energy</label><br>

			</div>
			<div class="radio">
				<label>
					<input type="radio" id="q1" value="i" v-model="picked1">
					Leave early with decreased energy
				</label>
			</div>
		</li>

		<li><strong>Are you more often:</strong><br>
			<div class="radio">
				<label>
					<input type="radio" id="q2" value="t" v-model="picked2">
					a cool-headed person
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" id="q2" value="f" v-model ="picked2">
					a warm-hearted person
				</label>
			</div>
		</li>

		<li><strong>Do you prefer:</strong><br>
			<div class="radio">
				<label>
					<input type="radio" name="q3" value="e" v-model ="picked3">
					many friends with brief contact
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="q3" value="i" v-model ="picked3">
					a few friends with more lengthy contact
				</label>
			</div>
		</li>

		<li><strong>Which person is more to be complimented &ndash; one of:</strong><br>
			<div class="radio">
				<label>
					<input type="radio" name="q53" value="t" v-model="picked4">
					clear reason
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="q53" value="f" v-model="picked4">
					strong feeling
				</label>
			</div>
		</li>

		<li><strong>When the phone rings do you:</strong><br>
			<div class="radio">
				<label>
					<input type="radio" name="q57" value="e" v-model="picked5">
					hasten to get to it first
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="q57" value="i" v-model="picked5">
					hope someone else will answer
				</label>
			</div>
		</li>

		<li><strong>Which seems the greater error:</strong><br>
			<div class="radio">
				<label>
					<input type="radio" name="q60" value="t" v-model ="picked6">
					to be too passionate
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="q60" value="f" v-model ="picked6">
					to be too objective
				</label>
			</div>
		</li>
		</ol>
	<input class = "button" type = "submit" value = "Submit">
	</form>
</div>
<div class="submittedform" v-else>

	<h1 :class="type">
		{{personality.title}}
	</h1>
	<h4>
		{{personality.description}}
	</h4>
	<button @click = "onReset()" class = "button" :class="type">Take Quiz Again</button>
	

	<!-- <MovieSuggestions :title="personality.title"/> Can include this later...-->
</div>



</template>

<script>
//import MovieSuggestions from '../components/MovieSuggestions'
export default {
	name: 'quiz',
	
	data(){
		return{
			results: {},
			picked1: '',
			picked2:'',
			picked3:'',
			picked4:'',
			picked5:'',
			picked6:'',
			type: "",
			isSubmitted : false,
			personality: {},
		}
	},
	
	methods:{
		onSubmit(e){
			e.preventDefault()

			this.results = {
				picked1 : this.picked1,
				picked2 : this.picked2,
				picked3 : this.picked3,
				picked4 : this.picked4,
				picked5 : this.picked5,
				picked6 : this.picked6
			}

			this.isSubmitted = true;

			let ee , i ,t , f ;
			ee = i=t=f = 0;
			let type = ""

			for(let k in this.results){
				switch(this.results[k]){
					case 'e':{
						ee++;
						break;
					}
					case 'i':{
						i++;
						break;
					}
					case 'f':{
						f++;
						break;
					}
					case 't':{
						t++;
						break;
					}
				}
			}

			ee= Math.floor(ee/10*100);
			i = Math.floor(i/10*100);
			t = Math.floor(t/10*100);
			f =Math.floor(f/10*100);

			type += (ee>=i)? "E" :"I";
			type += (t >= f) ? "T" : "F";


			console.log(type);
			this.type = type;
			let types ={
				EF: {
					title: "The Hopeless Romantic",
					description: "The Hopeless Romantic longs for someone to hold. These people would enjoy a nice romance movie or rom-com"

				},
				ET :{
					title: "The Entertainer",
					description: "The Entertainer is witty and sociable. They would love to watch a comedy!"				
				},
				IT:{
					title: "The Historian",
					description: "These Historian likes to learn! These people will like documentaries."
				},
				IF:{
					title: "The Day Dreamer",
					description: "The day dreamer is always in their own head. These people will typically like fantasy or sci-fi movies"

				}
			}
		this.personality= types[type]

		this.picked1 = '';
		this.picked2 = '';
		this.picked3 = '';
		this.picked4 = '';
		this.picked5 = '';
		this.picked6 = '';
		},
		

		onReset(){
			this.isSubmitted = false;
			this.$refs.foam.reset();
		}
	}
}
</script>


<style lang="scss">
h1 {
     margin-top: 2em;
    text-align: center;
}
h3 {
    margin-top: 10px;
    text-align: center;
    }

h4 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
}
.IF{
	color: mediumslateblue;
}
.IT {
	color: peachpuff;
}

.ET{
	color: darkorchid;
}
.EF{
	color: hotpink;
}
button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
  text-align: center;
  margin: 0 auto;
	display: block;

}
.button{
	cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
  margin: 0 auto;
    display: block;
}
@media (min-width: 992px) {
	
	ol li {
		float: left;
		margin-bottom: 1em;
		width: 50%;
	}

}
body {
	font: 16px/1.5em Lato, sans-serif;
}
.form input {
    margin-bottom: 1em;
}


form{
	margin-top: 2em;
	margin-left: 3em;
	display: inline-block;
}
</style>