class ClipboardService {
	constructor() {}

	/**
	 * Copy puts a string onto the clipboard
	 * @param {String} data Data to copy to the clipboard
	 */
	Copy(data) {
		let el = document.createElement("textarea");
		el.value = data;
		el.setAttribute("readonly", "");
		el.style.position = "absolute";
		el.style.left = "-9999px";

		document.body.appendChild(el);

		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
	}
}

module.exports = ClipboardService;
