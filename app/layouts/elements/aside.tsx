
const AsideLayout = () => {

    return (
        <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                            <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                                <a href="../../demo1/dist/index.html">
                                    <img alt="Logo" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-dark.svg" className="h-25px app-sidebar-logo-default" />
                                    <img alt="Logo" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-small.svg" className="h-20px app-sidebar-logo-minimize" />
                                </a>
                                <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
                                    <i className="ki-duotone ki-double-left fs-2 rotate-180">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                            </div>
                            <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                                <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                                    <div className="menu menu-column menu-rounded menu-sub-indention px-3" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-element-11 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Dashboards</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/index.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Default</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/dashboards/ecommerce.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">eCommerce</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/dashboards/projects.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Projects</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/dashboards/online-courses.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Online Courses</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/dashboards/marketing.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Marketing</span>
                                                    </a>
                                                </div>
                                                <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/bidding.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Bidding</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/pos.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">POS System</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/call-center.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Call Center</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/logistics.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Logistics</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/website-analytics.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Website Analytics</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/finance-performance.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Finance Performance</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/store-analytics.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Store Analytics</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/social.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Social</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/delivery.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Delivery</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/crypto.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Crypto</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/school.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">School</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/dashboards/podcast.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Podcast</span>
                                                        </a>
                                                    </div>
                                                    <div className="menu-item">
                                                        <a className="menu-link" href="../../demo1/dist/landing.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Landing</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <div className="menu-content">
                                                        <a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                                                            <span data-kt-toggle-text-target="true">Show 12 More</span>
                                                            <i className="ki-duotone ki-minus-square toggle-on fs-2 me-0">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            <i className="ki-duotone ki-plus-square toggle-off fs-2 me-0">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item pt-5">
                                            <div className="menu-content">
                                                <span className="menu-heading fw-bold text-uppercase fs-7">Pages</span>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-address-book fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">User Profile</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link active" href="../../demo1/dist/pages/user-profile/overview.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Overview</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/user-profile/projects.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Projects</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/user-profile/campaigns.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Campaigns</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/user-profile/documents.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Documents</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/user-profile/followers.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Followers</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/user-profile/activity.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Activity</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-element-plus fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Account</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/overview.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Overview</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/settings.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/security.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Security</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/activity.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Activity</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/billing.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Billing</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/statements.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Statements</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/referrals.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Referrals</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/api-keys.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">API Keys</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/account/logs.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Logs</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-user fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Authentication</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Corporate Layout</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/sign-in.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-in</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/sign-up.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-up</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/two-factor.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Two-Factor</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/reset-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/new-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">New Password</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Overlay Layout</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/overlay/sign-in.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-in</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/overlay/sign-up.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-up</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/overlay/two-factor.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Two-Factor</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/overlay/reset-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/overlay/new-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">New Password</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Creative Layout</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/creative/sign-in.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-in</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/creative/sign-up.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-up</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/creative/two-factor.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Two-Factor</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/creative/reset-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/creative/new-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">New Password</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Fancy Layout</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/fancy/sign-in.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-in</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/fancy/sign-up.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sign-up</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/fancy/two-factor.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Two-Factor</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/fancy/reset-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/layouts/fancy/new-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">New Password</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Email Templates</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/welcome-message.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Welcome Message</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/reset-password.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/subscription-confirmed.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Subscription Confirmed</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/card-declined.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Credit Card Declined</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/promo-1.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Promo 1</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/promo-2.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Promo 2</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/authentication/email/promo-3.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Promo 3</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/extended/multi-steps-sign-up.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Multi-steps Sign-up</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/welcome.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Welcome Message</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/verify-email.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Verify Email</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/coming-soon.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Coming Soon</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/password-confirmation.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Password Confirmation</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/account-deactivated.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Account Deactivation</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/error-404.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Error 404</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/authentication/general/error-500.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Error 500</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-file fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Corporate</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-2 py-4 w-200px mh-75 overflow-auto">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/about.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">About</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/team.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Our Team</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/contact.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Contact Us</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/licenses.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Licenses</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/sitemap.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Sitemap</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-39 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Social</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/social/feeds.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Feeds</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/social/activity.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Activty</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/social/followers.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Followers</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/social/settings.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-bank fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Blog</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/blog/home.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Blog Home</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/blog/post.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Blog Post</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-chart-pie-3 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">FAQ</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/faq/classic.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">FAQ Classic</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/faq/extended.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">FAQ Extended</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-bucket fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Pricing</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/pricing/column.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Column Pricing</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/pricing/table.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Table Pricing</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-call fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                        <span className="path6"></span>
                                                        <span className="path7"></span>
                                                        <span className="path8"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Careers</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/careers/list.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Careers List</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/pages/careers/apply.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Careers Apply</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-color-swatch fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                        <span className="path6"></span>
                                                        <span className="path7"></span>
                                                        <span className="path8"></span>
                                                        <span className="path9"></span>
                                                        <span className="path10"></span>
                                                        <span className="path11"></span>
                                                        <span className="path12"></span>
                                                        <span className="path13"></span>
                                                        <span className="path14"></span>
                                                        <span className="path15"></span>
                                                        <span className="path16"></span>
                                                        <span className="path17"></span>
                                                        <span className="path18"></span>
                                                        <span className="path19"></span>
                                                        <span className="path20"></span>
                                                        <span className="path21"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Utilities</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Modals</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                            <span className="menu-link">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">General</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/general/invite-friends.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Invite Friends</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/general/view-users.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">View Users</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/general/select-users.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Select Users</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/general/upgrade-plan.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Upgrade Plan</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/general/share-earn.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Share & Earn</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                            <span className="menu-link">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Forms</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-target.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">New Target</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-card.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">New Card</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-address.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">New Address</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/create-api-key.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Create API Key</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/bidding.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Bidding</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                            <span className="menu-link">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Wizards</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-app.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Create App</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-campaign.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Create Campaign</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-account.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Create Business Acc</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-project.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Create Project</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Top Up Wallet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/offer-a-deal.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Offer a Deal</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/two-factor-authentication.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Two Factor Auth</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                            <span className="menu-link">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Search</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/search/users.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Users</span>
                                                                    </a>
                                                                </div>
                                                                <div className="menu-item">
                                                                    <a className="menu-link" href="../../demo1/dist/utilities/modals/search/select-location.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Select Location</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Search</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/search/horizontal.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Horizontal</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/search/vertical.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Vertical</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/search/users.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Users</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/search/select-location.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Location</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Wizards</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/horizontal.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Horizontal</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/vertical.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Vertical</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/two-factor-authentication.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Two Factor Auth</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-app.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Create App</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-campaign.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Create Campaign</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-account.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Create Account</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-project.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Create Project</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Top Up Wallet</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/utilities/wizards/offer-a-deal.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Offer a Deal</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-element-7 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Widgets</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/widgets/lists.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Lists</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/widgets/statistics.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Statistics</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/widgets/charts.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Charts</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/widgets/mixed.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Mixed</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/widgets/tables.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Tables</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/widgets/feeds.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Feeds</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item pt-5">
                                            <div className="menu-content">
                                                <span className="menu-heading fw-bold text-uppercase fs-7">Apps</span>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-41 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Projects</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/list.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">My Projects</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/project.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">View Project</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/targets.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Targets</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/budget.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Budget</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/users.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Users</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/files.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Files</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/activity.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Activity</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/projects/settings.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-basket fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">eCommerce</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Catalog</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/products.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Products</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/categories.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Categories</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-product.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Add Product</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Edit Product</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-category.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Add Category</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Edit Category</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Sales</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/listing.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Orders Listing</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/details.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Order Details</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/add-order.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Add Order</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/edit-order.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Edit Order</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Customers</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/listing.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Customer Listing</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/details.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Customer Details</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Reports</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/view.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Products Viewed</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/sales.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Sales</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/returns.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Returns</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/customer-orders.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Customer Orders</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/shipping.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Shipping</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/ecommerce/settings.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-25 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Contacts</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/contacts/getting-started.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Getting Started</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/contacts/add-contact.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Add Contact</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/contacts/edit-contact.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Edit Contact</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/contacts/view-contact.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">View Contact</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-chart fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Support Center</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/support-center/overview.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Overview</span>
                                                    </a>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Tickets</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/list.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Tickets List</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/view.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">View Ticket</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Tutorials</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/list.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Tutorials List</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/post.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Tutorial Post</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/support-center/faq.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">FAQ</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/support-center/licenses.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Licenses</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/support-center/contact.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Contact Us</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-28 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">User Management</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Users</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/user-management/users/list.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Users List</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/user-management/users/view.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">View User</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Roles</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/user-management/roles/list.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Roles List</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/user-management/roles/view.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">View Role</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/user-management/permissions.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Permissions</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-38 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Customers</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/customers/getting-started.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Getting Started</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/customers/list.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Customer Listing</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/customers/view.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Customer Details</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-map fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Subscription</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/subscriptions/getting-started.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Getting Started</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/subscriptions/list.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Subscription List</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/subscriptions/add.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Add Subscription</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/subscriptions/view.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">View Subscription</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-credit-cart fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Invoice Manager</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                                    <span className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">View Invoices</span>
                                                        <span className="menu-arrow"></span>
                                                    </span>
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-1.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Invoice 1</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-2.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Invoice 2</span>
                                                            </a>
                                                        </div>
                                                        <div className="menu-item">
                                                            <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-3.html">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot"></span>
                                                                </span>
                                                                <span className="menu-title">Invoice 3</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/invoices/create.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Create Invoice</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-switch fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">File Manager</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/file-manager/folders.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Folders</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/file-manager/files.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Files</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/file-manager/blank.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Blank Directory</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/file-manager/settings.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-sms fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Inbox</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/inbox/listing.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Messages</span>
                                                        <span className="menu-badge">
                                                            <span className="badge badge-success">3</span>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/inbox/compose.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Compose</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/inbox/reply.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">View & Reply</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-message-text-2 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Chat</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/chat/private.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Private Chat</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/chat/group.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Group Chat</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/apps/chat/drawer.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Drawer Chat</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="../../demo1/dist/apps/calendar.html">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-calendar-8 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                        <span className="path6"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Calendar</span>
                                            </a>
                                        </div>
                                        <div className="menu-item pt-5">
                                            <div className="menu-content">
                                                <span className="menu-heading fw-bold text-uppercase fs-7">Layouts</span>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-element-7 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Layout Options</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/layouts/light-sidebar.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Light Sidebar</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/layouts/dark-sidebar.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Dark Sidebar</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/layouts/light-header.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Light Header</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/layouts/dark-header.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Dark Header</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                            <span className="menu-link">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-text-align-center fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Toolbars</span>
                                                <span className="menu-arrow"></span>
                                            </span>
                                            <div className="menu-sub menu-sub-accordion">
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/toolbars/classic.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Classic</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/toolbars/saas.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">SaaS</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/toolbars/accounting.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Accounting</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/toolbars/extended.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Extended</span>
                                                    </a>
                                                </div>
                                                <div className="menu-item">
                                                    <a className="menu-link" href="../../demo1/dist/toolbars/reports.html">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Reports</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-13 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Layout Builder</span>
                                            </a>
                                        </div>
                                        <div className="menu-item pt-5">
                                            <div className="menu-content">
                                                <span className="menu-heading fw-bold text-uppercase fs-7">Help</span>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-rocket fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Components</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-abstract-26 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Documentation</span>
                                            </a>
                                        </div>
                                        <div className="menu-item">
                                            <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
                                                <span className="menu-icon">
                                                    <i className="ki-duotone ki-code fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>
                                                </span>
                                                <span className="menu-title">Changelog v8.1.8</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
                                <a href="https://preview.keenthemes.com/html/metronic/docs" className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
                                    <span className="btn-label">Docs & Components</span>
                                    <i className="ki-duotone ki-document btn-icon fs-2 m-0">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </a>
                            </div>
                        </div>
    )
}

export default AsideLayout