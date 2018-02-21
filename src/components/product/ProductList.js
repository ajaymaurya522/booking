import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No Products Found'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };
    }

    render() {
        return (
            <BootstrapTable data={this.props.products}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>

                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

                <TableHeaderColumn
                    dataField="title"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle>
                    Title
                </TableHeaderColumn>

            </BootstrapTable>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};

export default ProductList;
