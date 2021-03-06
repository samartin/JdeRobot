// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `varcolor.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    require("Ice/Object");
    require("Ice/ObjectPrx");
    require("Ice/Operation");
    require("Ice/Long");
    require("Ice/HashMap");
    require("Ice/HashUtil");
    require("Ice/ArrayUtil");
    require("Ice/StreamHelpers");
    
    var Ice = global.Ice || {};
    require("image");
    
    var jderobot = global.jderobot || {};

    /**
     * Interface to the image provider.
     **/
    jderobot.VarColor = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::VarColor"
        ],
        -1, undefined, undefined, false);

    jderobot.VarColorPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.VarColor.ice_staticId, undefined);

    Slice.defineOperations(jderobot.VarColor, jderobot.VarColorPrx,
    {
        "getDescription": [, 2, 2, , , ["jderobot.ImageDescription", true], , , , , true],
        "getData": [, 2, 2, 1, , ["jderobot.ImageData", true], , , 
        [
            jderobot.DataNotExistException,
            jderobot.HardwareFailedException
        ], , true]
    });
    global.jderobot = jderobot;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));
