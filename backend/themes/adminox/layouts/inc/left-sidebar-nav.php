<?php
use app\modules\core\widgets\Menu;
?>

<?= Menu::widget([
    'linkTemplate' => '<a href="{url}">{icon}<span>{label}</span></a>',
    'submenuTemplate' => '<ul class="nav-second-level nav" aria-expanded="true">{items}</ul>',
    'firtsItemSubmenuTemplate' => '<a href="javascript: void(0);" aria-expanded="true">{icon}<span>{label}</span><span class="menu-arrow"></span></a>',
    'items' => [
        [
            'label' => 'Dashboard',
            'url' => ['/core/index/index'],
            'iconOptions' => [
                'class' => 'dripicons-home',
            ],
        ],
        [
            'label' => 'Social links',
            'url' => ['/core/social-links/index'],
            'iconOptions' => [
                'class' => 'mdi mdi-share',
            ],
        ],
        [
            'label' => 'Site management',
            'items' => [
                [
                    'label' => 'Core pages',
                    'url' => ['/core/core-pages/index'],
                ],
                [
                    'label' => 'Text blocks',
                    'url' => ['/core/text-blocks/index'],
                ],
                [
                    'label' => 'Settings',
                    'url' => ['/core/settings/update'],
                ],
            ],
            'iconOptions' => [
                'class' => 'dripicons-gear',
            ],
        ],
        [
            'label' => 'Proffessional skills',
            'url' => ['/user/proffessional-skills/index'],
            'iconOptions' => [
                'class' => 'mdi mdi-share',
            ],
        ],
        [
            'label' => 'Article management',
            'items' => [
                [
                    'label' => 'Article categories',
                    'url' => ['/article/article-categories/index'],
                ],
                [
                    'label' => 'Article tags',
                    'url' => ['/article/article-tags/index'],
                ],
                [
                    'label' => 'Articles',
                    'url' => ['/article/articles/index'],
                ],
            ],
            'iconOptions' => [
                'class' => 'dripicons-view-list',
            ],
        ],
        [
            'label' => 'Portfolio management',
            'items' => [
                [
                    'label' => 'Portfolio categories',
                    'url' => ['/portfolio/categories/index'],
                ],
                [
                    'label' => 'Portfolio tags',
                    'url' => ['/portfolio/tags/index'],
                ],
                [
                    'label' => 'Portfolio works',
                    'url' => ['/portfolio/works/index'],
                ],
            ],
            'iconOptions' => [
                'class' => 'dripicons-view-list',
            ],
        ],
        [
            'label' => 'Admin icons',
            'iconOptions' => [
                'class' => 'mdi mdi-cube',
            ],
            'items' => [
                [
                    'label' => 'Colored Icons',
                    'url' => ['/core/icons/colored-icons'],
                ],
                [
                    'label' => 'Material Design',
                    'url' => ['/core/icons/material-design'],
                ],
                [
                    'label' => 'Dripicons',
                    'url' => ['/core/icons/dripicons'],
                ],
                [
                    'label' => 'Font awesome',
                    'url' => ['/core/icons/font-awesome'],
                ],
                [
                    'label' => 'Feather Icons',
                    'url' => ['/core/icons/feather-icons'],
                ],
                [
                    'label' => 'Simple line Icons',
                    'url' => ['/core/icons/simple-line-icons'],
                ],
                [
                    'label' => 'Flag Icons',
                    'url' => ['/core/icons/flag-icons'],
                ],
                [
                    'label' => 'File Icons',
                    'url' => ['/core/icons/file-icons'],
                ],
                [
                    'label' => 'PE7 Icons',
                    'url' => ['/core/icons/pe7-icons'],
                ],
                [
                    'label' => 'Typicons',
                    'url' => ['/core/icons/typicons'],
                ],
            ]
        ]
    ],
    'options' => [
        'class' => 'metisMenu nav',
        'id' => 'side-menu',
    ],
]); ?>

<!-- Left Menu Start -->
<!-- <ul class="metisMenu nav" id="side-menu">
    <li class="menu-title">Navigation</li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-air-play"></i><span class="badge badge-success pull-right">2</span> <span> Dashboard </span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="index.html">Dashboard 1</a>
            </li>
            <li><a href="dashboard-2.html">Dashboard 2</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-target"></i> <span> Admin UI </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="admin-grid.html">Grid</a>
            </li>
            <li><a href="admin-sweet-alert.html">Sweet Alert</a>
            </li>
            <li><a href="admin-tiles.html">Tiles Box</a>
            </li>
            <li><a href="admin-nestable.html">Nestable List</a>
            </li>
            <li><a href="admin-rangeslider.html">Range Slider</a>
            </li>
            <li><a href="admin-ratings.html">Ratings</a>
            </li>
            <li><a href="admin-filemanager.html">File Manager</a>
            </li>
            <li><a href="admin-lightbox.html">Lightbox</a>
            </li>
            <li><a href="admin-scrollbar.html">Scroll bar</a>
            </li>
            <li><a href="admin-slider.html">Slider</a>
            </li>
            <li><a href="admin-treeview.html">Treeview</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-briefcase"></i> <span> UI Kit </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="ui-typography.html">Typography</a>
            </li>
            <li><a href="ui-panels.html">Panels</a>
            </li>
            <li><a href="ui-buttons.html">Buttons</a>
            </li>
            <li><a href="ui-modals.html">Modals</a>
            </li>
            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a>
            </li>
            <li><a href="ui-spinners.html">Spinners</a>
            </li>
            <li><a href="ui-ribbons.html">Ribbons</a>
            </li>
            <li><a href="ui-portlets.html">Portlets</a>
            </li>
            <li><a href="ui-tabs.html">Tabs</a>
            </li>
            <li><a href="ui-progressbars.html">Progress Bars</a>
            </li>
            <li><a href="ui-notifications.html">Notification</a>
            </li>
            <li><a href="ui-carousel.html">Carousel</a>
            <li><a href="ui-video.html">Video</a>
            <li><a href="ui-tooltips-popovers.html">Tooltips & Popovers</a>
            </li>
            <li><a href="ui-images.html">Images</a>
            </li>
            <li><a href="ui-bootstrap.html">Bootstrap UI</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="tickets.html"><i class="fi-help"></i><span class="badge badge-danger pull-right">New</span> <span> Tickets </span></a>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-box"></i><span> Icons </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="icons-colored.html">Colored Icons</a>
            </li>
            <li><a href="icons-materialdesign.html">Material Design</a>
            </li>
            <li><a href="icons-dripicons.html">Dripicons</a>
            </li>
            <li><a href="icons-fontawesome.html">Font awesome</a>
            </li>
            <li><a href="icons-feather.html">Feather Icons</a>
            </li>
            <li><a href="icons-simple-line.html">Simple line Icons</a>
            </li>
            <li><a href="icons-flags.html">Flag Icons</a>
            </li>
            <li><a href="icons-file.html">File Icons</a>
            </li>
            <li><a href="icons-pe7.html">PE7 Icons</a>
            </li>
            <li><a href="icons-typicons.html">Typicons</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-bar-graph-2"></i><span> Graphs </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="chart-flot.html">Flot Chart</a>
            </li>
            <li><a href="chart-morris.html">Morris Chart</a>
            </li>
            <li><a href="chart-google.html">Google Chart</a>
            </li>
            <li><a href="chart-echart.html">Echarts</a>
            </li>
            <li><a href="chart-chartist.html">Chartist Charts</a>
            </li>
            <li><a href="chart-chartjs.html">Chartjs Chart</a>
            </li>
            <li><a href="chart-c3.html">C3 Chart</a>
            </li>
            <li><a href="chart-justgage.html">Justgage Charts</a>
            </li>
            <li><a href="chart-sparkline.html">Sparkline Chart</a>
            </li>
            <li><a href="chart-knob.html">Jquery Knob</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-mail"></i><span> Email </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="email-inbox.html">Inbox</a>
            </li>
            <li><a href="email-read.html">Read Email</a>
            </li>
            <li><a href="email-compose.html">Compose Email</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="taskboard.html"><i class="fi-paper"></i> <span> Task Board </span></a>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-disc"></i><span class="badge badge-warning pull-right">12</span> <span> Forms </span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="form-elements.html">Form Elements</a>
            </li>
            <li><a href="form-advanced.html">Form Advanced</a>
            </li>
            <li><a href="form-layouts.html">Form Layouts</a>
            </li>
            <li><a href="form-validation.html">Form Validation</a>
            </li>
            <li><a href="form-pickers.html">Form Pickers</a>
            </li>
            <li><a href="form-wizard.html">Form Wizard</a>
            </li>
            <li><a href="form-mask.html">Form Masks</a>
            </li>
            <li><a href="form-summernote.html">Summernote</a>
            </li>
            <li><a href="form-wysiwig.html">Wysiwig Editors</a>
            </li>
            <li><a href="form-typeahead.html">Typeahead</a>
            </li>
            <li><a href="form-x-editable.html">X Editable</a>
            </li>
            <li><a href="form-uploads.html">Multiple File Upload</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-layout"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="tables-basic.html">Basic Tables</a>
            </li>
            <li><a href="tables-layouts.html">Tables Layouts</a>
            </li>
            <li><a href="tables-datatable.html">Data Tables</a>
            </li>
            <li><a href="tables-foo-tables.html">Foo Tables</a>
            </li>
            <li><a href="tables-responsive.html">Responsive Table</a>
            </li>
            <li><a href="tables-tablesaw.html">Tablesaw Tables</a>
            </li>
            <li><a href="tables-editable.html">Editable Tables</a>
            </li>
        </ul>
    </li>
    <li class="menu-title">More</li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-map"></i> <span> Maps </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="maps-google.html">Google Maps</a>
            </li>
            <li><a href="maps-google-full.html">Full Google Map</a>
            </li>
            <li><a href="maps-vector.html">Vector Maps</a>
            </li>
            <li><a href="maps-mapael.html">Mapael Maps</a>
            </li>
        </ul>
    </li>
    <li><a href="calendar.html"><i class="fi-clock"></i> <span>Calendar</span> </a>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-paper-stack"></i><span> Pages </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="page-starter.html">Starter Page</a>
            </li>
            <li><a href="page-login.html">Login</a>
            </li>
            <li><a href="page-register.html">Register</a>
            </li>
            <li><a href="page-logout.html">Logout</a>
            </li>
            <li><a href="page-recoverpw.html">Recover Password</a>
            </li>
            <li><a href="page-lock-screen.html">Lock Screen</a>
            </li>
            <li><a href="page-confirm-mail.html">Confirm Mail</a>
            </li>
            <li><a href="page-404.html">Error 404</a>
            </li>
            <li><a href="page-404-alt.html">Error 404-alt</a>
            </li>
            <li><a href="page-500.html">Error 500</a>
            </li>
        </ul>
    </li>
    <li class="has_sub">
        <a href="javascript:void(0);"><i class="fi-marquee-plus"></i><span> Extra Pages </span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="extras-about.html">About Us</a>
            </li>
            <li><a href="extras-contact.html">Contact</a>
            </li>
            <li><a href="extras-companies.html">Companies</a>
            </li>
            <li><a href="extras-members.html">Members</a>
            </li>
            <li><a href="extras-members-2.html">Membars 2</a>
            </li>
            <li><a href="extras-timeline.html">Timeline</a>
            </li>
            <li><a href="extras-invoice.html">Invoice</a>
            </li>
            <li><a href="extras-maintenance.html">Maintenance</a>
            </li>
            <li><a href="extras-coming-soon.html">Coming Soon</a>
            </li>
            <li><a href="extras-faq.html">FAQ</a>
            </li>
            <li><a href="extras-pricing.html">Pricing</a>
            </li>
            <li><a href="extras-profile.html">Profile</a>
            </li>
            <li><a href="extras-email-template.html">Email Templates</a>
            </li>
            <li><a href="extras-search-result.html">Search Results</a>
            </li>
            <li><a href="extras-sitemap.html">Site Map</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="todo.html"><i class="fi-layers"></i> <span> Todo </span></a>
    </li>
    <li>
        <a href="javascript: void(0);" aria-expanded="true"><i class="fi-share"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
        <ul class="nav-second-level nav" aria-expanded="true">
            <li><a href="javascript: void(0);">Level 1.1</a>
            </li>
            <li>
                <a href="javascript: void(0);" aria-expanded="true">Level 1.2 <span class="menu-arrow"></span></a>
                <ul class="nav-third-level nav" aria-expanded="true">
                    <li><a href="javascript: void(0);">Level 2.1</a>
                    </li>
                    <li><a href="javascript: void(0);">Level 2.2</a>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul> -->