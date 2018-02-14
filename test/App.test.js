import test from 'ava'
import App from './../src/App.vue'
import { mount } from 'avoriaz'

var componente = mount(App)

test('o total sendo iniciado com valor 0', t =>{
	t.is( componente.data().total, 0 )
})

test('subtraindo um número com o total', t =>{
	let button = componente.find('button')[0]
	button.trigger('click')
	t.is( componente.data().total, -1 )
})

test('subtraindo um número com o total', t =>{
	let button = componente.find('button')[1]
	button.trigger('click')
	t.is( componente.data().total, 0 )
})