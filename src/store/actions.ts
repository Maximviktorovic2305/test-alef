import { ChildrenPersonProps, PersonDataProps } from '../types'

export function getPersonData(
	{ commit }: { commit: any },
	personData: PersonDataProps[],
) {
	commit('setPersonData', personData[0])
}

export function getPersonChildren(
	{ commit }: { commit: any },
	personChildren: ChildrenPersonProps[],
) {
	commit('setPersonChildren', personChildren)
}
