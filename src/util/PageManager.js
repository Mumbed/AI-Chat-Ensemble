/**
 * 각 페이지에 대한 정보를 담고 있는 클래스.
 */

export default class PageManager {
    static #pagelist = [
        {
            title: "질문하기",
            href: "question"
        },
        {
            title: "통계보기",
            href: "summary"
        },
        {
            title: "AI종류보기",
            href: "ailist"
        }
    ];
    static get list() {
        return this.#pagelist;
    }
}