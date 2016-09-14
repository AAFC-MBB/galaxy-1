define( [ 'plugin/charts/nvd3/common/config' ], function( nvd3_config ) {
    return $.extend( true, {}, nvd3_config, {
        title       : 'Scatter plot',
        category    : 'Others',
        zoomable    : true,
        groups      : {
            x : {
                label       : 'Values for x-axis',
                type        : 'data_column',
                is_numeric  : true
            },
            y : {
                label       : 'Values for y-axis',
                type        : 'data_column',
                is_numeric  : true
            }
        }
    });
});