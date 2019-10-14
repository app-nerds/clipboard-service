/*
 * A service that provides methods for copy/pasting to/from clipboard.
 *
 * v1.1.0
 * Copyright 2019 App Nerds LLC
 */
export class ClipboardService {
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

