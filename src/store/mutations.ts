import { ChildrenPersonProps, PersonDataProps } from '../types'

export function setPersonData(state: any, personData: PersonDataProps) {
	state.person.name = personData.name
	state.person.age = personData.age
}

export function setPersonChildren(
	state: any,
	personChildren: ChildrenPersonProps[],
) {
	state.children = [...personChildren] || []
}
