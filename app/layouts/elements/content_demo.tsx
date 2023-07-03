const ContentDemoLayout = () => {
    return (
        <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-xxl">
                <div className="card mb-5 mb-xxl-8">
                    <div className="card-body pt-9 pb-0">
                        <div className="d-flex flex-wrap flex-sm-nowrap">
                            <div className="me-7 mb-4">
                                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" alt="image" />
                                    <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-center mb-2">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
                                            <a href="#">
                                                <i className="ki-duotone ki-verify fs-1 text-primary">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </a>
                                        </div>
                                        <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                            <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>Developer</a>
                                            <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                                <i className="ki-duotone ki-geolocation fs-4 me-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>SF, Bay Area</a>
                                            <a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                                <i className="ki-duotone ki-sms fs-4 me-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>max@kt.com</a>
                                        </div>
                                    </div>
                                    <div className="d-flex my-4">
                                        <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                                            <i className="ki-duotone ki-check fs-3 d-none"></i>
                                            <span className="indicator-label">Follow</span>
                                            <span className="indicator-progress">Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
                                        <div className="me-0">
                                            <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                <i className="ki-solid ki-dots-horizontal fs-2x me-1"></i>
                                            </button>
                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                <div className="menu-item px-3">
                                                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Create Invoice</a>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                        <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                            <i className="ki-duotone ki-information fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span></a>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Generate Bill</a>
                                                </div>
                                                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                    <a href="#" className="menu-link px-3">
                                                        <span className="menu-title">Subscription</span>
                                                        <span className="menu-arrow"></span>
                                                    </a>
                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        <div className="menu-item px-3">
                                                            <a href="#" className="menu-link px-3">Plans</a>
                                                        </div>
                                                        <div className="menu-item px-3">
                                                            <a href="#" className="menu-link px-3">Billing</a>
                                                        </div>
                                                        <div className="menu-item px-3">
                                                            <a href="#" className="menu-link px-3">Statements</a>
                                                        </div>
                                                        <div className="separator my-2"></div>
                                                        <div className="menu-item px-3">
                                                            <div className="menu-content px-3">
                                                                <label className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                                                    <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menu-item px-3 my-1">
                                                    <a href="#" className="menu-link px-3">Settings</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap flex-stack">
                                    <div className="d-flex flex-column flex-grow-1 pe-8">
                                        <div className="d-flex flex-wrap">
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                    <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
                                                </div>
                                                <div className="fw-semibold fs-6 text-gray-400">Earnings</div>
                                            </div>
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                    <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
                                                </div>
                                                <div className="fw-semibold fs-6 text-gray-400">Projects</div>
                                            </div>
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                    <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
                                                </div>
                                                <div className="fw-semibold fs-6 text-gray-400">Success Rate</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                        <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                            <span className="fw-semibold fs-6 text-gray-400">Profile Compleation</span>
                                            <span className="fw-bold fs-6">50%</span>
                                        </div>
                                        <div className="h-5px mx-3 w-100 bg-light mb-3">
                                            <div className="bg-success rounded h-5px" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo1/dist/pages/user-profile/overview.html">Overview</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/pages/user-profile/projects.html">Projects</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/pages/user-profile/campaigns.html">Campaigns</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/pages/user-profile/documents.html">Documents</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/pages/user-profile/followers.html">Followers</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo1/dist/pages/user-profile/activity.html">Activity</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row g-5 g-xxl-8">
                    <div className="col-xl-6">
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Grace Green</a>
                                            <span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
                                        </div>
                                    </div>
                                    <div className="my-0">
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-category fs-6">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            <div className="separator mb-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            <div className="separator mt-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form id="kt_forms_widget_1_form" className="ql-quil ql-quil-plain pb-3">
                                    <div id="kt_forms_widget_1_editor" className="py-6"></div>
                                    <div className="separator"></div>
                                    <div id="kt_forms_widget_1_editor_toolbar" className="ql-toolbar d-flex flex-stack py-2">
                                        <div className="me-2">
                                            <span className="ql-formats ql-size ms-0">
                                                <select className="ql-size w-75px"></select>
                                            </span>
                                            <span className="ql-formats">
                                                <button className="ql-bold"></button>
                                                <button className="ql-italic"></button>
                                                <button className="ql-underline"></button>
                                                <button className="ql-strike"></button>
                                                <button className="ql-image"></button>
                                                <button className="ql-link"></button>
                                                <button className="ql-clean"></button>
                                            </span>
                                        </div>
                                        <div className="me-n3">
                                            <span className="btn btn-icon btn-sm btn-active-color-primary">
                                                <i className="ki-duotone ki-paper-clip fs-2"></i>
                                            </span>
                                            <span className="btn btn-icon btn-sm btn-active-color-primary">
                                                <i className="ki-duotone ki-geolocation fs-2">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center mb-5">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-23.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Nick Logan</a>
                                            <span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
                                        </div>
                                    </div>
                                    <div className="my-0">
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-category fs-6">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            <div className="separator mb-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            <div className="separator mt-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <p className="text-gray-800 fw-normal mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>
                                    <div className="d-flex align-items-center mb-5">
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                            <i className="ki-duotone ki-message-text-2 fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>120</a>
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                            <i className="ki-duotone ki-heart fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>15</a>
                                    </div>
                                </div>
                                <div className="separator mb-4"></div>
                                <form className="position-relative mb-6">
                                    <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>
                                    <div className="position-absolute top-0 end-0 me-n5">
                                        <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                            <i className="ki-duotone ki-paper-clip fs-2 mb-3"></i>
                                        </span>
                                        <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                            <i className="ki-duotone ki-geolocation fs-2 mb-3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-21.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
                                            <span className="text-gray-400 fw-bold">Yestarday at 5:06 PM</span>
                                        </div>
                                    </div>
                                    <div className="my-0">
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-category fs-6">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            <div className="separator mb-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            <div className="separator mt-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>
                                    <div className="d-flex align-items-center mb-5">
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                            <i className="ki-duotone ki-message-text-2 fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>12</a>
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                            <i className="ki-duotone ki-heart fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>150</a>
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="d-flex mb-5">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column flex-row-fluid">
                                            <div className="d-flex align-items-center flex-wrap mb-1">
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Alice Danchik</a>
                                                <span className="text-gray-400 fw-semibold fs-7">1 day</span>
                                                <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                            </div>
                                            <span className="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column flex-row-fluid">
                                            <div className="d-flex align-items-center flex-wrap mb-1">
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold me-2">Harris Bold</a>
                                                <span className="text-gray-400 fw-semibold fs-7">2 days</span>
                                                <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">Reply</a>
                                            </div>
                                            <span className="text-gray-800 fs-7 fw-normal pt-1">Outlines keep you honest. They stop you from indulging in poorly</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="separator mb-4"></div>
                                <form className="position-relative mb-6">
                                    <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>
                                    <div className="position-absolute top-0 end-0 me-n5">
                                        <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                            <i className="ki-duotone ki-paper-clip fs-2 mb-3"></i>
                                        </span>
                                        <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                            <i className="ki-duotone ki-geolocation fs-2 mb-3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center mb-5">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-7.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
                                            <span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="my-0">
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-category fs-6">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Create Invoice</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                    <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                        <i className="ki-duotone ki-information fs-6">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                        </i>
                                                    </span></a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Generate Bill</a>
                                            </div>
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">Subscription</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Plans</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Billing</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Statements</a>
                                                    </div>
                                                    <div className="separator my-2"></div>
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content px-3">
                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                                                <span className="form-check-label text-muted fs-6">Recuring</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item px-3 my-1">
                                                <a href="#" className="menu-link px-3">Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>
                                    <div className="d-flex align-items-center mb-5">
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                            <i className="ki-duotone ki-message-text-2 fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>22</a>
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                            <i className="ki-duotone ki-heart fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>59</a>
                                    </div>
                                </div>
                                <div className="separator mb-4"></div>
                                <form className="position-relative mb-6">
                                    <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>
                                    <div className="position-absolute top-0 end-0 me-n5">
                                        <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                            <i className="ki-duotone ki-paper-clip fs-2 mb-3"></i>
                                        </span>
                                        <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                            <i className="ki-duotone ki-geolocation fs-2 mb-3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card d-none" id="kt_widget_5">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center mb-5">
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <div className="symbol symbol-45px me-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-7.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Carles Nilson</a>
                                            <span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="my-0">
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-duotone ki-category fs-6">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </button>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            <div className="separator mb-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            <div className="separator mt-3 opacity-75"></div>
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-7">
                                    <div className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5" style={{ backgroundImage: "url('https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/900x600/19.jpg')" }}></div>
                                    <div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>
                                    <div className="d-flex align-items-center mb-5">
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                            <i className="ki-duotone ki-message-text-2 fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>20</a>
                                        <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                            <i className="ki-duotone ki-heart fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>50</a>
                                    </div>
                                </div>
                                <div className="separator mb-4"></div>
                                <form className="position-relative mb-6">
                                    <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows="1" placeholder="Reply.."></textarea>
                                    <div className="position-absolute top-0 end-0 me-n5">
                                        <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                            <i className="ki-duotone ki-paper-clip fs-2 mb-3"></i>
                                        </span>
                                        <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                            <i className="ki-duotone ki-geolocation fs-2 mb-3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button className="btn btn-primary w-100 text-center" id="kt_widget_5_load_more_btn">
                            <span className="indicator-label">More Feeds</span>
                            <span className="indicator-progress">Loading...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold fs-3 mb-1">Recent Statistics</span>
                                    <span className="text-muted fw-semibold fs-7">More than 400 new members</span>
                                </h3>
                                <div className="card-toolbar">
                                    <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-category fs-6">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641ac3fed2480">
                                        <div className="px-7 py-5">
                                            <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                        </div>
                                        <div className="separator border-gray-200"></div>
                                        <div className="px-7 py-5">
                                            <div className="mb-10">
                                                <label className="form-label fw-semibold">Status:</label>
                                                <div>
                                                    <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641ac3fed2480" data-allow-clear="true">
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
                            </div>
                            <div className="card-body">
                                <div id="kt_charts_widget_1_chart" style={{ height: '350px' }}></div>
                            </div>
                        </div>
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-header align-items-center border-0 mt-4">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="fw-bold mb-2 text-dark">Activities</span>
                                    <span className="text-muted fw-semibold fs-7">890,344 Sales</span>
                                </h3>
                                <div className="card-toolbar">
                                    <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-category fs-6">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641ac3fed33b1">
                                        <div className="px-7 py-5">
                                            <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                        </div>
                                        <div className="separator border-gray-200"></div>
                                        <div className="px-7 py-5">
                                            <div className="mb-10">
                                                <label className="form-label fw-semibold">Status:</label>
                                                <div>
                                                    <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641ac3fed33b1" data-allow-clear="true">
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
                            </div>
                            <div className="card-body pt-5">
                                <div className="timeline-label">
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">08:42</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-warning fs-1"></i>
                                        </div>
                                        <div className="fw-mormal timeline-content text-muted ps-3">Outlines keep you honest. And keep structure</div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">10:00</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-success fs-1"></i>
                                        </div>
                                        <div className="timeline-content d-flex">
                                            <span className="fw-bold text-gray-800 ps-3">AEOL meeting</span>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">14:37</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-danger fs-1"></i>
                                        </div>
                                        <div className="timeline-content fw-bold text-gray-800 ps-3">Make deposit
                                            <a href="#" className="text-primary">USD 700</a>. to ESL
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-primary fs-1"></i>
                                        </div>
                                        <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-danger fs-1"></i>
                                        </div>
                                        <div className="timeline-content fw-semibold text-gray-800 ps-3">New order placed
                                            <a href="#" className="text-primary">#XF-2356</a>.
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">16:50</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-primary fs-1"></i>
                                        </div>
                                        <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">21:03</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-danger fs-1"></i>
                                        </div>
                                        <div className="timeline-content fw-semibold text-gray-800 ps-3">New order placed
                                            <a href="#" className="text-primary">#XF-2356</a>.
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-label fw-bold text-gray-800 fs-6">10:30</div>
                                        <div className="timeline-badge">
                                            <i className="fa fa-genderless text-success fs-1"></i>
                                        </div>
                                        <div className="timeline-content fw-mormal text-muted ps-3">Finance KPI Mobile app launch preparion meeting</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContentDemoLayout