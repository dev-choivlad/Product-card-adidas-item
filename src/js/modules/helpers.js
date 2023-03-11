const helpers = {
/*	switchColor: () => {
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
	}*/

	switchColor: () => {
		const switchers = document.querySelectorAll(".switcher");
		const images = document.querySelectorAll(".product-card__image");

		switchers.forEach(switcher => {
			switcher.addEventListener("click", (e) => {
				for (let i = 0; i < switchers.length; i++) {
					switchers[i].classList.remove("active")
				}
				e.currentTarget.classList.add("active")

				images.forEach(image => {
					for (let i = 0; i < images.length; i++) {
						images[i].classList.remove("active");

						if (images[i].classList.contains(`product-card__image--${e.currentTarget.dataset.color}`)) {
							images[i].classList.add("active");
						}
					}
				})
			})
		})
	}
}

export const switchColor = helpers.switchColor;