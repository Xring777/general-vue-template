export type MenuOptionsType = {
	label: string
	key: string
	icon: string
	props: {
		onClick: () => void
	}
}[]

export type UserMenuOptionsType = MenuOptionsType
export type MdMenuOptionsType = MenuOptionsType
