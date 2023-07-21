export type MenuOptionsType = {
	label: string
	key: string
	icon?: string
	children?: MenuOptionsType
	submenuOpen?: boolean
	props: {
		onClick: () => void
	}
}[]

export type UserMenuOptionsType = MenuOptionsType
export type MdMenuOptionsType = MenuOptionsType
