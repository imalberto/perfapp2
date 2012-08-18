

perfapp used for benchmarking binder and firstbyte changes.


specs

    frame (deleted)
        type: ShakerHTMLFrameMojit
    index (delete)
        base: frame
    app:
        type: Layout
    app2: // only with 2 instances of ListMojit
        type: Layout
    html_frame:
        type: HTMLFrameMojit
    firstbyte_frame:
        type: FirstByteFrameMojit
    html_index:
        base: html_frame
    firstbyte_index:
        base: firstbyte_frame

    static_app:
        type: Layout
            children: // static list mojits

    test_html_frame:
        base: static_app
    test_firstbyte_frame:
        base: app





