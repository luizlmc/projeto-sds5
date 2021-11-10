import { SalePage } from "types/sale";

type PaginationProps = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: PaginationProps) => {

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                </li>
                <li className="page-item disabled">
                    <span className="page-link">{page.number + 1}</span>
                </li>
                <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;