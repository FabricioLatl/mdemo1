const BreadcumbLayout = () => {

    return (
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Overview</h1>
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                        <li className="breadcrumb-item text-muted">
                            <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                        </li>
                        <li className="breadcrumb-item text-muted">User Profile</li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                    <div className="m-0">
                        <a href="#" className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i className="ki-duotone ki-filter fs-6 text-muted me-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>Filter</a>
                        <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641ac3feccaa7">
                            <div className="px-7 py-5">
                                <div className="fs-5 text-dark fw-bold">Filter Options</div>
                            </div>
                            <div className="separator border-gray-200"></div>
                            <div className="px-7 py-5">
                                <div className="mb-10">
                                    <label className="form-label fw-semibold">Status:</label>
                                    <div>
                                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641ac3feccaa7" data-allow-clear="true">
                                            <option></option>
                                            <option value="1">Approved</option>
                                            <option value="2">Pending</option>
                                            <option value="2">In Process</option>
                                            <option value="2">Rejected</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <label className="form-label fw-semibold">Member Type:</label>
                                    <div className="d-flex">
                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                            <input className="form-check-input" type="checkbox" value="1" />
                                            <span className="form-check-label">Author</span>
                                        </label>
                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                            <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                                            <span className="form-check-label">Customer</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <label className="form-label fw-semibold">Notifications:</label>
                                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                        <label className="form-check-label">Enabled</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                    <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
                </div>
            </div>
        </div>
    )

}

export default BreadcumbLayout;