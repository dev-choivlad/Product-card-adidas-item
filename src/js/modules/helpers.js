const helpers = {
	switchColor: () => {
		const switchers = document.querySelector(".switchers")

		switchers.addEventListener("click", (e) => {
			let target = e.target;

			if (target.classList.contains("switcher")) {
				switchers.querySelector(".active").classList.remove("active")
				target.classList.add("active")

				document.querySelector(".product-card__image.active").classList.remove("active")
				document.querySelector(`.product-card__image.product-card__image--${target.dataset.color}`).classList.add("active")
			}
		})
	}
}

export const switchColor = helpers.switchColor;